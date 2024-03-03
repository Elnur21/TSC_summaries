# Introduction
<br/>TSC predicts categorical values.
<br/>TSER predicts continuous values for external variables.
<br/>Deep learning has potential but hasn't consistently outperformed traditional methods due to dataset size and hardware limitations.
<br/>In this paper various architectures and enhancements like  MLPs, CNNs, RNNs, GNNs and so on, are discussed.


# Background
<br/>Deep learning methods for TSC/TSER are categorized into generative and discriminative approaches.
<br/>Here taxonomy classifies discriminative methods based on network architectures, self-supervised learning, data augmentation, transfer learning.

## Taxonomy:
#### Supervised-->(MLP, CNN, RNN, GNN, Attention)
##### CNN-->(Adapted Convolutional Neural Network, Imaging Time Series, Multi-Scale Operation)
##### RNN-->(Vanilla Recurrent Neural Network, Long Short Term Memory, Gated Recurrent Unit, Hybrid)
##### Attention-->(Self-Attention, Transformers)

#### Self-Supervised-->(Self-Prediction, Contrastive Learning, Other pretext tasks)

#### Data Augmentation-->(Random Transformations, Window methods, Averaging methods)

#### Transfer Learning




# SUPERVISED MODELS
<br/> MLP processes data through interconnected layers of neurons to learn and make predictions.
<br/>
<br/> Adapted Convolutional Neural Network is offering to capture temporal and spatial features without relying on specific preprocessing methods.
<br/> Imaging time series --> converting time series data into images that allows for leveraging spatial relationships within the data that increases model performance.
<br/> Multi-Scale Operation is like MCNN and t-LeNet. 
<br/>
<br/> Recurrent Neural Networks process sequential data.
<br/> Vanilla Recurrent Neural Networks employ sequence-to-sequence architectures for time series classification.
<br/> Long Short Term Memory networks address gradient issues.
<br/> Gated Recurrent Unit networks excel in context memorization.
<br/> Hybrid combines spatial and temporal learning for TSC --> hybrid = CNN-RNN models.
<br/>
<br/> Attention models, integrating mechanisms to capture long-range dependencies, enhance feature representation, with variants like self-attention and transformers revolutionizing time series classification.
