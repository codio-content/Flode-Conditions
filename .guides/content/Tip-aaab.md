When doing the boolean challenges, you may find it helpful to map your inputs to nicely named variable names. You will see that this makes the logic a lot easier to read.

Take a look at the Flode chart on the left where you can see this better.

If the instruction for the challenge was 

> We will input two boolean values a) a boolean indicating whether a car is moving fast and b) a boolean indicating whether the traffic is heavy.

Rather than working directly with `input0` and `input1` we assign them having created 2 variables `fast` and `heavyTraffic`.

You can see that reading the condition `fast and !heavyTrafic` is easier to read than `input0 and !input1`.
