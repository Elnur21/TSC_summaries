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
<br/>
<br/> Graph Neural Networks revolutionize time series analysis by adapting deep learning techniques to irregularly structured data, like sensor networks, allowing for more accurate modeling of temporal dependencies and spatial relationships.


# SELF-SUPERVISED MODELS
<br/> SELF-SUPERVISED MODELS don't need explicit labels for learning. They are used to solve problems of costly labeled data.


# Data augmentation
<br/> Data augmentation enhances deep learning models by creating diverse variations of time series data. 
<br/> Techniques include altering magnitudes, slicing into smaller segments, and combining multiple series, chosen based on the dataset and network architecture for optimal performance.


# TRANSFER LEARNING
<br/> Transfer learning helps to improve time series classification by using pre-trained models, but success depends on choosing suitable datasets.
<br/> And it is inlude limited data availability and determining the best strategy for fine-tuning the network.


# APPLICATIONS - RECENT DEVELOPMENTS AND CHALLENGES
<br/> Deep learning techniques applied to human activity recognition and satellite Earth observation have diverse applications, including healthcare monitoring and land cover classification.
<br/> These applications benefit from advanced techniques like convolutional neural networks and recurrent neural networks.
