# Vector Spaces and Data Dimensions

Let start with dimensions. Let's  take an example.

Imagine you are mapping out coffee shops in you city. If you only care about the "Price", you can plot every shop on a single straight line from cheap to expensive. That is 1-dimensional space. 
If you care about "Price" and "Distance from home", you need a flat piece of paper with an X and Y axis to plot them. That is a 2-dimensional space.
If you add a third metric, like "Quality", your flat paper becomes a 3D room, and each coffee shop is suspended somewhere in the air like a tiny floating drone.


In Machine Learning, every piece of data—whether it is a user profile, a server log, or a word in a sentence—is treated exactly like one of those coffee shops. A Vector is simply the exact GPS coordinate of that data point. The Vector Space is the room it lives in. The Dimensions are the specific features (price, distance, etc.) that define the room's shape.

## The Math Behind Vector Spaces

In machine learning, we formalize this mapping using Linear Algebra. We define a vector x as an array of numbers that exists within an $n$-dimensional space, denoted as $Rˆn$ (where R represents real numbers).


$$x = [x_1, x_2, \dots, x_n] \belongs R^n$$

Let's bridge this to the real world. Imagine you are monitoring a server. At any given second, it state can be represented by a 3-dimensional vector: CPU usage, memory usage, and network traffic.

* $x_1$: CPU usage
* $x_2$: Memory usage
* $x_3$: Network traffic

if the CPU is at 80% useage, Memory is at 50% useage, and Network traffic is at 12 MB/s useage, the vector would be:

$$x_{server} = [80, 50, 12]$$

