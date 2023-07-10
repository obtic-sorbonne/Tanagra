# **TANAGRA**
Ce développement vise à mettre en place une interface web pour la géolocalisation et la cartographie des noms de lieux dans les textes. À partir d’un corpus de textes, l’application permet d’identifier les noms de lieu à l’aide de l’application SpaCy. Ensuite, les lieux reconnus sont géolocalisés en utilisant une base de données, puis projetés sur une carte interactive. Les nouveaux lieux peuvent également être ajoutés à la base de données. Il est possible pour l’utilisateur de filtrer les résultats par métadonnées (titre ou date), et d’exporter les lieux cartographiés au format csv.


### Lien: https://obtic.sorbonne-universite.fr/tanagra/map

***
# Détails:

C'est une application qui se compose de trois couche:
- Le front: est une interface utitlsateur codée en javascript (Angular 12+)
- Le back: est une API codée en Python qui sert à traîter le texte envoyé depuis le front et retoune les lieux y repérés grĉe à SpaCy.
- Un middleware: une API Geonames qui sert à récupérer les coordonnées de chaque lieux repéré par SpaCy

<br>


- L'application envoie un texte ou un fichier .txt ou .zip à Spacy
- SpaCy renvoie une liste des noms des lieux
- Cette liste est envoyée automatiquement à Geonames
- Geonames renvoie pour chaque lieu identifié une liste de toutes les possibiltés

### **ex:**
Si dans le texte envoyée à SpaCy il y a le mot "Paris", dans la liste retournée on aura un lieu appelé 'Paris'. Ce lieu est envoyé directement à Geonames qui, à son tour, va retournr une liste de tous les lieux appelés "Paris" dans le monde.. ça atteint parfois 100 possibilité pour un seul lieu dont chaque résultat a ses coordonnée.

<br>

L'application via un algorithme spécifié, va filtrer ce nom de lieu selon le nom du pays récupérer depuis Geonames, ensuite, un filter ajouté selon le nom de la région (state) pour permettre de répéter le même nom du lieu si chacun appartient à une région différente.
<br>
On a pour un nom de lieu comme **Paris** 5 ou 6 lieux et c'est l'utilisateur qui va préciser le nom désigné.
<br>
Le lieu choisi sera automatiquement retiré de la liste retournée par Geonames et affiché sur la carte **Leaflet**.

<br>

## **API Python**
Cette API se compose des modules suivants:

## **Flask:**
Flask est un micro framework open-source de développement web en Python. Il est classé comme microframework car il est très léger.

**installation Flask:**
```
$ pip install Flask 
$ pip3 install -U flask-cors
```

<br>

## **SpaCy:**
SpaCy est une bibliothèque logicielle Python de traitement automatique des langues. 
SpaCy permet d'effectuer les opérations d'analyse suivantes sur des textes dans plus de 50 langues:
- Tokenization ;
- Reconnaissance d'entités nommées.

### **Installation SpaCy:**
```
$ pip install -U pip setuptools wheel
$ pip install -U spacy
```

### **Installation des modèles:**

```
python3 -m spacy download fr_core_news_sm
python3 -m spacy download fr_core_news_md
python3 -m spacy download fr_core_news_lg
python3 -m spacy download en_core_web_md
python3 -m spacy download de_core_news_sm
python3 -m spacy download de_core_news_md
python3 -m spacy download de_core_news_lg
```

<br>


## **Werkzeug:**
Werkzeug est une bibliothèque complète d'applications Web WSGI.
```
pip install -U Werkzeug
```
<br>

Nous allons utiliser la classe werkzeug.utils afin d'importer le module secure_filename qui va nous permettre de sauvegarder le fichier d'une façon sécurisée.

## **Glob:**
Glob est un module qui renvoie une liste, potentiellement vide, de chemins correspondant au motif pathname, qui doit être une chaîne de caractères contenant la spécification du chemin. pathname peut être soit absolu (comme /usr/src/Python-1.5/Makefile) soit relatif (comme ../../Tools/*/*.gif), et contenir un caractère de remplacement de style shell. Les liens symboliques cassés sont aussi inclus dans les résultats (comme pour le shell).

## **Zipfile:**
Ce module fournit des outils pour créer, écrire, ajouter des données à et lister un fichier ZIP. 

<br><br><br><br>

## HELP
GeoNames Feature Codes <br>
https://www.geonames.org/export/codes.html
