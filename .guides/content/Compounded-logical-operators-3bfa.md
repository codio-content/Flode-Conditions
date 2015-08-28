You can build very complex conditions using logical operators. 

However, when your conditions get complex, you should use parentheses (brackets) to ensure the logic is evaluated exactly as you intend.

## Example
Take this example, which you can also see in the Flode chart on the left.

> If the temperature is greater than 10 and less than 20 or it is greater than 60 and less than 80 ....

This condition could be written like this

```javascript
temp>10 and temp<20 or temp>60 and temp<80
```

However, it is very clear how this gets evaluated. To make it clear to Flode (and programming languages demand the same clarity) it should be written like this.

```javascript
(temp>10 and temp<20) or (temp>60 and temp<80)
```

This way, programming languages know that the evaluation should work like this (let's assume that `temp=70`).

- First evaluate `(temp>10 and temp<20)` -> false
- Then evaluate `(temp>60 and temp<80)` -> true
- It can then evaluate the result, which would be `false or true`
- This evaluates to `true`
