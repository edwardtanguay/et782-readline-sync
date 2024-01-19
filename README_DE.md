# Eingabevalidierung

## Aufgabe 1

Gegeben ist ein String, der ein `password` enthält. Schreibe eine `do...while` Schleife, die den Benutzer so lange nach seinem Passwort fragt, bis er es korrekt eingibt.

Zum Beispiel:

```plaintext
// Passwort: 123456

Gib dein Passwort ein:
6789

Gib dein Passwort ein:
23847

Gib dein Passwort ein:
123456
```

Bonus: Verwende `console.clear()`, um eine sauberere Ausgabe im Terminal zu erhalten.

## Aufgabe 2

Schreibe ein Programm, das den Benutzer eine Frage stellt, die eine `yes` oder `no` Antwort akzeptiert.

Wenn die Antwort nicht `yes` oder `no` ist, wiederholt das Programm die gleiche Frage.

Zum Beispiel:

```plaintext
Bist du sicher? (yes/no): bla

Bist du sicher? (yes/no): ja

Bist du sicher? (yes/no): asd

Bist du sicher? (yes/no): no
```

## Aufgabe 3

Schreibe ein Programm, das den Benutzer auffordert, einen numerischen PIN-Code zu erstellen.

Wenn der eingegebene Code ein Zeichen enthält, das keine Zahl ist, stellt das Programm einfach die gleiche Frage erneut.

Zum Beispiel:

```plaintext
Erstelle deinen numerischen Pin:
abcd

Erstelle deinen numerischen Pin:
12gadfalksg

Erstelle deinen numerischen Pin:
123478
```

## Bonus

Passe eine der obigen Übungen an, indem du Fehlermeldungen mit `if...else` Anweisungen hinzufügst.