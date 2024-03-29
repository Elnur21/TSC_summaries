# Introduction
<br/>Recurrent Neural Networks (RNNs) are great for tasks like language modeling but have limits due to sequential processing.
<br/>It introduces the Transformer model, which uses attention mechanisms instead of recurrence, making it faster and better at translation tasks.

-----------------

# Background
<br/> There are alternative approaches to reduce sequential computation in neural network architectures, such as the Extended Neural GPU, ByteNet, and ConvS2S, which utilize convolutional neural networks for parallel computation. 
<br/> These models struggle with learning dependencies between distant positions.
<br/>
<br/>
<br/> The Transformer model uses self-attention.
<br/> It achieves efficient computation of representations.
<br/> This approach eliminates the need for sequential recurrence or convolution.
<br/> It represents a significant advancement in transduction models.

--------------

# Model Architecture
<br/> The Transformer model uses a unique structure with self-attention and fully connected layers in both the encoder and decoder. 
<br/> These layers, repeated six times, help the model understand and process input sequences effectively. 
<br/> By paying attention to different parts of the input, it can capture dependencies and relationships. 
<br/> The model also includes positional encodings to understand order of sequence.

---------

# Why Self-Attention
<br/>  Self-attention offers constant computational complexity per layer, making it faster than recurrent layers, especially for shorter sequences common in tasks like machine translation.
<br/> While convolutional layers can reduce complexity with separable convolutions, they still require more operations than self-attention.
<br/> Self-attention may lead to more interpretable models, as evidenced by the diverse tasks learned by individual attention heads, including syntactic and semantic understanding.

----------------

# Training and Results
<br/> Data from the WMT 2014 English-German and English-French datasets were utilized, employing byte-pair encoding for tokenization.
<br/> Batches were organized by sequence length, each containing approximately 25,000 source and target tokens. 
<br/> Training occurred on a machine equipped with 8 NVIDIA P100 GPUs, with base models trained for 100,000 steps (12 hours) and big models for 300,000 steps (3.5 days). 
<br/> The Adam optimizer was employed with varied learning rates, and regularization techniques such as residual dropout and label smoothing were utilized to prevent overfitting. 
<br/> The exceptional performance of the big Transformer model in English-to-German translation, surpassing previous state-of-the-art models by over 2.0 BLEU score points.
<br/> In English-to-French translation, the big Transformer model achieves a remarkable BLEU score while requiring substantially less training compared to previous state-of-the-art models.
