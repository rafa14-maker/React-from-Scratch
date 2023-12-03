function Person(props) {
    return (
        <div className="person">
        <h1>
           {props.name}
        </h1>
            <p>{props.age}</p>
    </div>
    );
}

var app = (
    <div>
        <person>
            name = "Max"
            age="29"
        </person>
        <person>
            name = "Manu"
            age="28"
        </person>
   </div>
);

ReactDOM.reander(app, document.querySelector('#app'));

// ReactDOM.reander(<Person name="Max" age="28" />, document.querySelector('#p1'));

// ReactDOM.reander(<Person name="Manu" age="29" />, document.querySelector('#p2'));




