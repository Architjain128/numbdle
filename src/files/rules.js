import React from "react";
import Block from "./block";

function Rules(){
    return(
        <div className="rules">
            <h1>How to Play</h1>
            <ul>
                <li>Guess the equation in 6 tries.</li>
                <li>After each guess, the color of the tiles will change to show how close your guess was to the solution.</li>
            </ul>
            <h2>Rules</h2>
            <ul>
                <li>You can use 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, +, -, *, /, and = only.</li>
                <li>Input length must be 8</li>
                <pre class="example">
                    <b>Examples</b><br/>
                    > 1+2*8=17 ✔️<br/>
                    > 100/20/5=1 ❌<br/>
                </pre>
                <li>Each guess must be a mathematically correct calculation.</li>
                <pre class="example">
                    <b>Examples</b><br/>
                    > 12+12=24 ✔️<br/>
                    > 12+12=25 ❌<br/>
                </pre>
                <li>It must contain exactly one “=”.</li>
                <pre class="example">
                    <b>Examples</b><br/>
                    > 1+2*8=17 ✔️<br/>
                    > 1+2*8+17 ❌<br/>
                    > 1+2*8+1= ❌<br/>
                </pre>
                <li>It must have a number to the right of the “=”.</li>
                <pre class="example">
                    <b>Examples</b><br/>
                    > 1+2*8=17 ✔️<br/>
                    > 17=1+2*8 ❌<br/>
                </pre>
                <li>Order of operations applies, so we calculate / and * before + and -. If there are more than one operands, we calculate them from left to right.</li>
                <pre class="example">
                    <b>Examples</b><br/>
                    > 1+2*8=17 ✔️<br/>
                    > 1+2*8=24 ❌<br/>
                    > 8/4/2=1 ✔️<br/>
                    > 8/4/2=4 ❌<br/>
                </pre>
                <li>If the answer we're looking for is 1+2*8=17, then all commutative equivalent equations are considered correct.</li>
                <pre class="example">
                    <b>Examples</b><br/>
                    > 1+2*8=17<br/>
                    > 1+8*2=17<br/>
                    > 2*8+1=17<br/>
                    > 8*2+1=17<br/>
                </pre>
            </ul>
            <h2>Coloring Rules</h2>
            <ul>
                <pre class="example">Correct Equation : 12+13=25</pre>
                <div className="row color-example">
                    <Block letterPos={0} attemptVal={0} flag={true} value={"4"} color={"wrongplace"}/>
                    <Block letterPos={1} attemptVal={0} flag={true} value={"2"} color={"rightplace"}/>
                    <Block letterPos={2} attemptVal={0} flag={true} value={"+"} color={"rightplace"}/>
                    <Block letterPos={3} attemptVal={0} flag={true} value={"2"} color={"almostrightplace"}/>
                    <Block letterPos={4} attemptVal={0} flag={true} value={"1"} color={"almostrightplace"}/>
                    <Block letterPos={5} attemptVal={0} flag={true} value={"="} color={"rightplace"}/>
                    <Block letterPos={6} attemptVal={0} flag={true} value={"6"} color={"wrongplace"}/>
                    <Block letterPos={7} attemptVal={0} flag={true} value={"3"} color={"almostrightplace"}/>
                </div>
                <li><b>Green</b> block indicates number or operand is in the solution and in the correct spot.</li>
                <li><b>Yellow</b> block indicates number or operand is in the solution but in the wrong spot.</li>
                <li><b>Grey</b> block indicate number or operand is not in the solution in any spot.</li>
                <li>If your guess includes, say, two 2s but the answer has only one, you will get both color tile.</li>
                <li>Tiles will only go green if the number is in the correct position or when a full guess is rearranged as a winning commutative answer.</li>
            </ul>

            <h3>Made with ❤️ by <a href="https://architjain128.github.io" style={{textDecoration: 'none',fontWeight:"bolder"}} >Archit Jain</a></h3>

        </div>
    )
}

export default Rules;