# Introduction
<br/>In this paper first of all there is information about 1-of-K target encoding method.
<br/>1-of-K coding is a method just keep current class and replace others with zero. 
<br/>1-of-K is applied to target labels and it gets a matrix, then this matrix is used to calculate loss.
<br/>In this paper there is new method for getting target matrix, error correcting codes are used as target vector.
<br/>This new method is called Hadamard coding.
<br/> Here used some datasets like MNIST, STL-10, CIFAR-100, and ILSVRC-2012.

------

# Preliminaries
<br/>In this part the definition of 1-of- coding is given as special case.
<br/>The Hamming distance between two rows of a target code matrix is the count of positions where the symbols in those rows differ. 
<br/>Pairwise Hamming distance refers to this measure of dissimilarity calculated between each pair of rows in the target code matrix.
<br/>The Hadamar code can be generated from Hadamar matrix and the Hadamar matrix requires the columns and rows are orthogonal.
<br/>And here Hadamar matrix gives -1 and +1 in matrix.
<br/>The size of the Hadamard matrix is a power of 2.

------

# Relevance of Target Coding in Deep Learning
<br/>Uniformness in each row of S – Each row of a Hadamard code has m/2 symbols that equals one.
<br/>Uniformness in each column of S – Similarly, each column of a Hadamard code has m/2 symbols that equals one.
<br/>The pairwise Hamming distance is also m/2.

-------

# Using Target Code in Convolutional Network
<br/> Here used CNN model architecture on all datasets.
<br/> 1-of-K and Hadamar length 127 and 255 are compared.
<br/> When the code length is increased to 255,  better results are obtained, with an average relative improvement over 11% .
