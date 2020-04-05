# Soccer Stats

## Topics covered.

### Enum type et Type assertion

> Les `enum` ont pour objectifs de signaler aux autres dév que les informations contenu à l'intérieur sont étroitement liées. Le type `enum` s'utilise lorsque que l'on certaines données qu'on utilisera dans notre application. Par exemple: l'utilisation dans un algorithm des coluleur primaire (rouge, jaune et bleu), la liste des soda proposer sur carte de menu, le status d'un message (lu ou pas lu), le stutus d'un colis (en cours de préparation, en cours de livraison, livré), etc..

> Type assertion est feature de typescript qui pour but de déduire et de vérifier le type d'une valeur ou d'une variable delon une certaine logique. Utilisation : réassigner le type d'une valeur. Synthax: `type as value` ou `<type>value`

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

Dans l'exemple on définit un `enum` qu'on utilise pour dire à Typescript que *nous(développeur) sommes sûr* que l'élément  définit comme `MatchResult` est bien de type `enum`. 

On a réassigner le type de cette valeur car nous en tant que développeur sommes sûr du type que voulons assigner.


### Generics 
> Les `Generics` s'apparentent aux arguments d'une function. *sauf que là cette argument s'applique sur une function ou une class*.

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
}

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
Tout comme les arguments à l'intérieur d'une function personnalise cette fonction. Les `generics` permettent de personnaliser une function/classe. Elles permettent de définir le type d'un argument/propriété/return value.

> Convention. Les generics peuvent porter n'importe quelle nom. Cependant laconvention veut que les `generics` soient nommer  en commençant par la lettre T (pour type)