# Soccer Stats

## Topics covered.

### Enum type et Type assertion

> **Les `enum`** ont pour objectifs de signaler aux autres dévéloppeurs que les informations contenues à l'intérieur sont étroitement liées. Le type `enum` s'utilise lorsque certaines données qu'on utilisera dans notre application sont liées. Par exemple: 

- l'utilisation dans un algorithm des couleurs primaires (rouge, jaune et bleu)

- la liste des boissons proposer à la carte dans un restaurant, 

- le status d'un message (lu ou pas lu), 

- le status d'un colis (en cours de préparation, en cours de livraison, livré), etc..

> **Type assertion**:  est feature de typescript qui pour but de déduire et de vérifier le type d'une valeur ou d'une variable selon une certaine logique. 

Exemple d'utilisation.

```typescript

interface Datable extends Array<any> {
  // Define array contract
  [index: number]: any
}

enum MatchResult {
  charsE = 'E',
  numberThree = 3
}
const data: Datable = [1, 2, 3, 'a', 'b', 'E', 'Z']

let result: any[] = []
data.map((element: number | string): void => {
  if (element === 3) {
    // First synthax
    result.push(element as MatchResult) // can be 'E' or 3
  } else if (element === 'E') {
    // Second synthax
    result.push(<MatchResult>element) // can be 'E' or 3
  }
})

console.log(result);
```

Ci dessus, on définit un `enum` que l'on utilise pour dire à Typescript que *nous(développeur) sommes sûr* que l'élément  définit comme `MatchResult` est bien de type `enum`. 

Ensuite on traverse le tableau `data` à la recherche des valeurs qui correspondent aux éléments présents de le `enum`.
La synthaxe `<MatchResult>element` veut dire ceci: **Accepter cet élément si et seulement si il est bien de type `enum`.** Nous en tant que dévéloppeurs ont va imposer le type de valeur qui va être ajouté au tableau `result`.

### Generics 
> Les `Generics` s'apparentent aux arguments d'une function. *sauf qu'ici cette argument s'applique sur une function ou une class*.

```typescript
// First code 
class HoldNumber {
  constructor(public data: number){}
}

class HoldString {
  constructor(public date: string){}
}

const holdNumber = new HoldNumber(1)
const holdString = new HoldString('cfzfzefzef')


// Refactor with generics
class HoldAnything<TypeOfDate> {
  someProperty: TypeOfData
  constructor(public data: TypeOfDate){}
}^^^

// Exemple with a function & generics
const holdAnything = new HoldAnything<number>(4)
const holdAnything2 = new HoldAnything<string>('ssssfzefzef')

// function holdAnythingAgain<T, U> {...} is equal to :
const holdAnythingAgain = <T, U>(a: T, b: U): T => {
  console.log(
    `
      Argument a is ${typeof a}
      Argement b is ${typeof b}
    `
  )
  return a
}

holdAnythingAgain<string, number>('sss', 485)
```
Tout comme les arguments à l'intérieur d'une function personnalisent cette fonction. Les `generics` permettent de personnaliser une function/classe. Elles permettent de définir le type d'argument, de propriété et de `return value`.
**Convention. Les generics peuvent porter n'importe quelle nom. Cependant la convention veut que les `generics` soient nommer en commençant par la lettre T (pour type).**


### Composition vs Inheritance

> Inheritance: Accès aux propriétés et méthodes de la classe parent par la classe enfant. **De ce fait, on dit que c'est classes ont une relation `is a`. En d'autres termes `the child class` is a `parent class` because he can access the properties and methods of the parent class**.

```typescript
abstract class Computer {
  abstract launch()

  install() {
    this.launch()
    // ..
  }
}

class AcrobatReaderSoftware extends Computer {
  launch()  {
    // ...
  }
}

const acrobatReaderSoftware = new AcrobatReaderSoftware
acrobatReaderSoftware.install()
```

> Composition: Une classe à une reférence vers une ou plusieurs autres classes. **De ce fait, on dit que ces classes ont une ralation `has a` En d'autres termes the class has a reference to others class**.


```typescript

class PhysicsSotfware {
  bySoftware() {

  }

  putCdIntoComputer() {

  }

  launch() {
    // ...
  }
}

class Computer {
  constructor(public software) {}

  install() {
    this.softawre.bySoftware()
    this.softawre.putCdIntoComputer()
    this.sotware.launch()
    // ...
  }
}


const physicsSoftware = new PhysicsSotfware
const computer = new Computer(physicsSoftware)
computer.install()
```
