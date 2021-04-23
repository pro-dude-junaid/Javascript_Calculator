function App(){
    const [expression,setExpression] = React.useState(""); //By default it will be an empty string
    const [answer, setAnswer] = React.useState(0); //This is going to be zero by default

    const display = (symbol) => {
        setExpression((prev) => prev + symbol);
        if (expression[expression.length - 1] == "="){
            if (/[1-9.]/.test(symbol)){
                setExpression(symbol);
            }else{
                setExpression(answer + symbol);
            }
        }
    };
    const calculate = () => {
        setAnswer(eval(expression)); 
        setExpression(prev => prev + "=")
    };
    const allClear = () => {
        setExpression("");
        setAnswer(0);
    };
    const clear = () => {
        setExpression((prev => 
            prev
            .split("")
            .slice(0, prev.length - 1)
            .join("")
        ));
        setAnswer(0);
    };
    return (
        <div className="container">
            <div className="grid">
                <div className="dis">
                    <input type="text" value={expression} placeholder="0" disabled/>
                    <div className="total">
                        {answer}
                    </div>
                </div>
                <div onClick={allClear} className="padButton AC allClear">
                AC
                </div>
                <div onClick={clear} className="padButton C Clear">
                    C
                </div>
                <div onClick={() => display("/")} className="padButton DIV operations">
                    /
                </div>
                <div onClick={() => display("*")} className="padButton MUL operations">
                    X
                </div>
                <div onClick={() => display("7")} className="padButton SEVEN numbers">
                    7
                </div>
                <div onClick={() => display("8")} className="padButton EIGHT numbers">
                    8
                </div>
                <div onClick={() => display("9")} className="padButton NINE numbers">
                    9
                </div>
                <div onClick={() => display("-")} className="padButton MINUS operations">
                    -
                </div>
                <div onClick={() => display("4")} className="padButton FOUR numbers">
                    4
                </div>
                <div onClick={() => display("5")} className="padButton FIVE numbers">
                    5
                </div>
                <div onClick={() => display("6")} className="padButton SIX numbers">
                    6
                </div>
                <div onClick={() => display("+")} className="padButton PLUS operations">
                    +
                </div>
                <div onClick={() => display("1")} className="padButton ONE numbers">
                    1
                </div>
                <div onClick={() => display("2")} className="padButton TWO numbers">
                    2
                </div>
                <div onClick={() => display("3")} className="padButton THREE numbers">
                    3
                </div>
                <div onClick={calculate} className="padButton EQUAL eq">
                    =
                </div>
                <div onClick={() => display("0")} className="padButton ZERO numbers">
                    0
                </div>
                <div onClick={() => display(".")} className="padButton POINT dot">
                    .
                </div>
        </div>
    </div>
    );
}
ReactDOM.render(<App/>, document.getElementById("root"));