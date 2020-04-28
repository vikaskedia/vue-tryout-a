# Status

|                                 Description                                | Status |
|:--------------------------------------------------------------------------:|--------|
| The two components run from different frames                               | No     |
| Both components share the same data using vuex                             | Yes    |
| repeated api calls are optimized using vuex-cache                          | Yes    |
| On page reload the api calls are not made again                            | No     |
| PanleTypeTable and CardTypeTable can be used both for student and teachers |        |
| Forms are generated using vue-generator                                    |        |
| Forms are validated using vuelidate                                        |        |
| Styles are abstracted so different styles can be applied                   |        |


# Running dev env
/Applications/Visual\ Studio\ Code.app/Contents/Resources/app/bin/code .


# Running server side
json-server db.json


# Running client side

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
