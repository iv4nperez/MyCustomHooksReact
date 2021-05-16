# useCounter

example:
```
const { state, increment, decrement, reset  } =  useCounter( 10 );

state="Es el estado modificado que regresa el custom hooks"
increment="funcion para incrementar el estado"
decrement="funcion para decrementar el estado"
reset="funcion para resetear el estado del custom  hook al valor por default"

```

# useFetch
example:
```
    const url = 'https://example.com/api/data';
    const { data:null, loading:true, error:null } = useFetch( url );
```



# useForm

example:

```
    const initialForm = {
        name:'',
        age:0,
        email:'
    }
    
    const [ values, handleInputChange, reset ] = useForm( initialForm );
```