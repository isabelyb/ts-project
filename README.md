# Typescript Fundamentals

* [Introduction](https://github.com/isabelyb/ts-project#introduction)
* [Primitive data type](https://github.com/isabelyb/ts-project#primitive-data-type)
* [Special data types](https://github.com/isabelyb/ts-project#special-data-types)
* [Functions](https://github.com/isabelyb/ts-project#functions)

## Introduction
### 1. Environment

* [.gitignore file](.gitignore) from [gitignore.io](https://www.toptal.com/developers/gitignore/).
* [.editorconfig file](.editorconfig) to define format from [editorconfig.org](https://editorconfig.org/).
* Install dependences ```npm init -y```.
* Install Typescript as dev dependence in the project ```npm install typescript --save-dev```.
* ```npx tsc --version``` to verify version.


💡 In a file .js write ```//@ts-check``` to check syntax.

### 2. El compilador

Transpila TS y genera Js

![El compilador](assets/compilator.png)

![La transpilación](assets/transpilacion.png)

* Luego de escribir en .ts -> ```npx tsc src/01-hello.ts``` -> Esto lo transcribe a .js

* ```npx tsc src/01-hello.ts --target es6``` Para decirle al compilador que transpile en ECMAScript 6


* ```npx tsc src/*.ts --target es6 --outDir dist``` Para decirle al compilador que transpile en ECMAScript 6 y que guarde todos los archivos .ts en la carpeta [dist](dist)

**🦖 Dato para estar pendiente!**

[**Deno**](https://deno.land/) es un runtime basado en la v8 de Chrome, desarrollado en el lenguaje de programación Rust y que compite directamente con Node.js, tanto en funcionalidades como en casos de uso.

![Deno](assets/deno.png)

### 3. TSConfig.json

Para configurar como el compilador de Ts.

el comando ```npx tsc --init``` inicializa un archivo [tsconfig.ts](tsconfig.json). En este va estar la configuración como el target, ourDir, strictMode, etc.

Ahora solo hay que correr ```npx tsc```.

💡 Se puede programar la compilación continua corriendo el comando ```npx tsc --watch```

## Primitive data type

💡 TypeScript es un superset, es decir, es todo lo que ya está en JavaScript y todo el sistema de tipos.

![Ts](assets/ts.png)

| Js | Ts |
| ------ | ------ |
| ```const age = 20;``` | ```const age: number = 20;``` |

💡 **Función anónima autoejecutable** (Self-Executing Anonymous Function): una vez declaradas, se llaman a sí mismas para inicializarse pasando desde ese momento a estar disponibles para otras partes de la aplicación.

```
(function(){ 
  /* ... */ 
})();
```

Code here ➡️  [Code](src)


## Special data types

* **Any**: la variable que se declare con este tipo de dato puede contener cualquier tipo de valor. Quita el análisis de tipos.
  
  Se puede usar para tener mayor flexibilidad, pero hay mejores forma para hacerlo.

  **CAST**: Pasar de un [tipo de dato a otro](src/08-any.ts).

* **Union Types** permiten una mayor flexibilidad al momento de [tipear variables](src/09-unionTypes.ts). 

  let foo: string | boolean | number;
Lo magico aqui es que al hacer validaciones, TS nos proporciona los metodos para cada tipo de data, segun sea el caso.
  ```
  let foo: string | boolean | number = 100;

  if(typeof foo === "string"){
    console.log(foo.toLowerCase())
  } else if(typeof foo === "number"){
    console.log(foo.chartAt(0))
  } else{
    console.log(foo)
  }
  ```
  Los métodos usados se auto-completan por el editor de texto.

* **Literal alias**: TypeScript permite crear un alias como nombre para un tipo. Ayuda a evitar la redundancia en los nombres de tipos.
  ```
  type TypeName = datatype1 | ... | datatypeN;
  ```
* **Literal types**: Una variable con un tipo literal puede contener únicamente una cadena del conjunto.
  Se usan cadenas como “tipos”, combinados con el símbolo de pipe (’|’) entre ellos.
  Son tipos de datos “personalizados”.
  Se usa para tener un conjunto acotado de opciones.
  ```
  type TypeName = 'datatype1'| ... | 'datatypeN';
  ```

## Functions

En TS se tiene que declarar el tipo de dato de cada parámetro en la función. TS va a marcar error en caso de que se agreguen mas o menos parámetros de los requeridos.

```
// JS
function createPerson(name, lastName){
  return {name, lastName}
}
createPerson() // no error
createPerson(0, true) // no error
createPerson('o', 32, true) //no error

// TS
function createPerson(name: string, lastName: string){
  return {name, lastName}
}
createPerson() // ERROR
createPerson(0, true) // ERROR
createPerson('o', 32, true) // ERROR
```

**Funciones declarativas**
```
function functionName (parameters: dataTypes) { statements }
```
**Arrow functions**
```
const functionName = (parameters: dataTypes) => { statements }
```
**Parámetros opcionale**
Agregar ```?``` después del nombre del parámetro pero antes de los ```:```.

Al no enviar ese parámetro cuando se usa la función por defecto este será ```undefined```.

```
function functionName (parameters?: dataTypes): dataTypes { statements }
```

💡 Se recomienda usar arrow functions por encima de las funciones declarativas normales.


💡 En TS se puede especificar que tipo de dato retorna la función e indicar cuando esa funcion no retorna nada.

```
// Retornando un string

function joinName(fName: string, lName: string): string {
 return `${fName} ${lName}`
}
```

```
// Funcion sin retorno
function printName(name: string): void {
  console.log(name)
}
```

### Modules

Code here ➡️  [Code](src/product)
