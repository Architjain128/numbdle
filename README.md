# Archit's Numbel

# How to play

+ Guess the equation in 6 tries.
+ After each guess, the color of the tiles will change to show how close your guess was to the solution. 

## Rules
+ You can use 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, +, -, *, /, and = only.
+ Input length must be 8
> #### Example
> + 1+2*8=17  ✔️
> + 100/20/5=1 ❌
+ Each guess must be a mathematically correct calculation.
> #### Example
> + 12+12=24 ✔️
> + 12+12=25 ❌ 

+ It must contain exactly one “=”.
> #### Example
> + 1+2*8=17 ✔️
> + 1+2*8+17 ❌ 
> + 1+2*8+1= ❌ 

+ It must have a number to the right of the “=”.
> #### Example
> + 1+2*8=17 ✔️
> + 17=1+2*8 ❌ 
+ Order of operations applies, so we calculate / and * before + and -. If there are more than one operands, we calculate them from left to right.
> #### Example
> + 1+2*8=17 ✔️
> + 1+2*8=24 ❌ 
> + 8/4/2=1 ✔️
> + 8/4/2=4 ❌ 

+ If the answer we're looking for is 1+2*8=17, then all commutative equivalent equations are considered correct.
> #### Example
> + 1+2*8=17
> + 1+8*2=17
> + 2*8+1=17
> + 8*2+1=17

## Coloring 
> ### Example
> #### Correct Equation : 12+13=25
> ![](./images/demoImg.png)
+ `Green` block indicates number or operand is in the solution and in the correct spot.
+ `Yellow` block indicates number or operand is in the solution but in the wrong spot.
+ `Grey` block indicate number or operand is not in the solution in any spot.

+ If your guess includes, say, two 2s but the answer has only one, you will get both color tile.

+ Tiles will only go green if the number is in the correct position or when a full guess is rearranged as a winning commutative answer.