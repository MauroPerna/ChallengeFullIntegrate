***Challenge técnico FULL INTEGRATE 2022***

🚀¡Bienvenidos al challenge técnico de FULL INTEGRATE! 

Estamos contentos de que nos elijas como motor de crecimiento para tu futuro. 
En este documento, encontrarás toda la información relacionada a este desafío 
(los ejercicios en sí, formato de entrega, etc). 
Por eso, te recomendamos que leas detenidamente antes de comenzar.

Para entregar la solución tendrás que crear un repositorio en tu cuenta de Github,
o del servicio Git que utilices. Asegúrate que el repositorio sea público para que 
podamos verlo.

Cuando termines de resolver envíanos un correo a javierjimenez78@gmail.com. 
Como asunto (o subject) del email deberás poner “Challenge Tecnico FULL INTEGRATE”

Tendrás tiempo de presentar la solución 72hs despues de que hayas recibido este challenge.

La consigna se puede resolver usando JavaScript o TypeScript.

En el cuerpo del email deberás ingresar tu nombre y apellido y la URL del repositorio.

Si tienes alguna duda de lo que debes realizar por favor contáctanos a 📫javierjimenez78@gmail.com. Te responderemos a la brevedad. 

✨Consigna

Estas a cargo de un programa de fidelizacion de tu empresa. Los anuncios son vistos en diferentes
paginas alrededor de internet. Tienes informacion en formato CSV, que cuenta cuantas veces los usuarios han hecho click en distintas urls donde esta publicitado el anuncio. Cada linea
consiste en un nombre de dominio(URL) y la cantidad de veces que distintos usuarios hicieron click
en el anuncio. Cada linea contiene un contador(entero) y el nombre de dominio(URL).

clicks = [ "900,google.com",
     "60,mail.yahoo.com",
     "10,mobile.sports.yahoo.com",
     "40,sports.yahoo.com",
     "300,yahoo.com",
     "10,stackoverflow.com",
     "20,overflow.com",
     "5,com.com",
     "2,en.wikipedia.org",
     "1,m.wikipedia.org",
     "1,mobile.sports",
     "1,google.co.uk"]

Como puedes ver tienes un arreglo "clicks", donde cada elemento es un string que contiene
el contador una coma y el dominio. Como puedes observar en el primer elemento se indica que en el dominio google.com se hizo click en el anuncio 900 veces. 

Bien debes saber que dentro de un dominio existen subdominios por ejemplo en la linea 3, 
tenemos como dominio "mobile.sports.yahoo.com" y dentro de ese dominio existen los subdominios:
"sports.yahoo.com"
"yahoo.com"
"com"

Siempre los subdominios se leen de izquierda a derecha, y estan separados por puntos. Por ejemplo en la segunda linea tenemos "mail.yahoo.com" y como subdominios "yahoo".com y "com"

Deberemos hacer una función que tome como parametro el arreglo "clicks" y nos devuelva una estructura de datos que contenga el numero de clicks que fueron hechos en cada dominio y subdominio correspondiente. Por ejemplo los clicks en "mail.yahoo.com" cuenta el total de clicks en "mail.yahoo.com", "yahoo.com", y "com".

En este caso para el dominio de "mail.yahoo.com" se computa 60 para el dominio "mail.yahoo.com"  60 para el subdominio "yahoo.com" y 60 para el subdominio "com".

Como podemos observar a medida que los subdominios se van repitiendo como por ej el subdominio "com", deberemos ir sumando el contador del dominio u subdominio. En este ejemplo como .com esta
repetido en todos los elementos contabiliza un total de 1345 veces.  

Se puede devolver una estructura de datos de tipo obj {clave: valor} donde la clave es el dominio u
subdominio y el valor es el total de clicks.

ej: objClicks={com:1345,
              google.com: 900, 
              yahoo.com: 410,
              ....etc}

⚡Resultado esperado =>
com:                     1345
google.com:              900
yahoo.com:               410
mail.yahoo.com:          60
sports.yahoo.com:        50
overflow.com:            20
mobile.sports.yahoo.com: 10
stackoverflow.com:       10
com.com:                 5
org:                     3
wikipedia.org:           3
en.wikipedia.org:        2
m.wikipedia.org:         1
mobile.sports:           1
sports:                  1
uk:                      1
co.uk:                   1
google.co.uk:            1

***Bonus***

El objeto no necesariamente tiene que estar ordenado, pero se considera un bonus si se ordena
de mayor a menor como esta en el ejemplo.

