#!/usr/bin/env python3
"""Comprueba integridad de páginas y rutas de la entrega. Solo Python estándar."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit,unquote
import json,re
ROOT=Path(__file__).resolve().parents[1]
class Parser(HTMLParser):
    def __init__(self):super().__init__();self.nodes=[]
    def handle_starttag(self,tag,attrs):self.nodes.append((tag,dict(attrs)))
def parse(path):
    parser=Parser();parser.feed(path.read_text(encoding='utf-8'));return parser
errors=[]
pages=[p for p in ROOT.rglob('*.html') if 'legacy' not in p.relative_to(ROOT).parts]
cache={p.resolve():parse(p) for p in pages}
for page in pages:
    nodes=cache[page.resolve()].nodes
    ids=[a['id'] for _,a in nodes if 'id' in a]
    if len(ids)!=len(set(ids)):errors.append(f'{page.name}: ID repetido')
    if sum(t=='h1' for t,a in nodes)!=1:errors.append(f'{page.name}: debe tener un h1')
    for tag,attrs in nodes:
        for key in ['href','src']:
            value=attrs.get(key,'')
            if not value or value.startswith(('http:','https:','data:','mailto:','tel:')):continue
            url=urlsplit(value);path=unquote(url.path)
            target=(page.parent/path).resolve() if path else page.resolve()
            if path and not target.is_file():errors.append(f'{page.relative_to(ROOT)}: falta {value}')
            if url.fragment and target in cache and not any(a.get('id')==url.fragment for _,a in cache[target].nodes):errors.append(f'{page.relative_to(ROOT)}: falta ancla {value}')
        if tag=='img' and 'alt' not in attrs:errors.append(f'{page.name}: imagen sin atributo alt')
for css in ROOT.rglob('*.css'):
    if 'legacy' in css.relative_to(ROOT).parts:continue
    for value in re.findall(r'url\([\'\"]?([^\)\'\"]+)',css.read_text()):
        if value.startswith(('http:','https:','data:','#')):continue
        if not (css.parent/value.split('?')[0]).is_file():errors.append(f'{css.relative_to(ROOT)}: falta {value}')
data=json.loads((ROOT/'data/content.json').read_text())
for key in ['islands','sports','spots','events']:
    items=data[key]
    if len({i['id'] for i in items})!=len(items):errors.append(f'IDs repetidos en {key}')
for spot in data['spots']:
    if spot['island'] not in {i['id'] for i in data['islands']}:errors.append(f'Isla desconocida en {spot["id"]}')
    if not set(spot['sports']).issubset({i['id'] for i in data['sports']}):errors.append(f'Modalidad desconocida en {spot["id"]}')
if errors:
    print('\n'.join(errors));raise SystemExit(1)
print(f'OK: {len(pages)} páginas; rutas, anclas, recursos e integridad del contenido comprobados.')
