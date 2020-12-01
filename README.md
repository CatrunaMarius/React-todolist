# Modulul React - todolist- Managing a Component Tree

Continuarea Modulul React - todolist- ES6 Spread Operator

In acest modul am adaugat o noua fuctie la todolist 
si anume acea de stergere prin doua metode diferite
una printr-o line care taie itemul si alte prin stergerea definitiva
prima varianta cea care taie itemul a fost implemetata 
    in todolist si arata cam asa:

    const [isDone, setDone] = useState(false);

    
    return (
      
    <div onClick={handleClick}>

      <li style={{ textDecoration: isDone ? "line-through" : "none" }}>

        {props.list}

      </li>

    </div>

  );

// pt mai multe detali vezi implemetarea din commitul line-through in todolist componet

pentru a doua varianta anume acea de stergere din lista
    a fost implementata o functie/meoda de a sterge functia
    atunci cand vrem sa sterge item este nevoie doar un click
    si acesta se va sterge. Functia arata cam asa:

    function deleteItem(id){

        setItems(prevValue=>{

        return prevValue.filter((item, index)=>{

            return index !== id
        }) 

        })

    }

// pt a veda cum sa implementata vazi App.jsx de mai sus