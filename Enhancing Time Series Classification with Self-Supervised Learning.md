# Introduction

Self-Supervised Learning (SSL) offers a promising avenue by learning discriminant latent spaces without explicit labels.<br/>
In this paper there is a novel approch for SSL it is name is TRILITE. <br/>
TRILITE uses the triplet loss, aiming to enhance feature learning. <br/>
This contribution includes novel time series augmentation, the use of triplet loss in SSL for TSC, and a new evaluation method demonstrating improved performance.

--------------------

# Related work

SSL for time series has evolved with approaches like contrastive learning and triplet loss. <br/>
Researchers have investigated various SSL techniques tailored to univariate and Multivariate Time Series (MTS), addressing challenges like temporal dependencies and dimensionality reduction. <br/>
DL methods for TSC have evolved with advancements such as the InceptionTime model and knowledge distillation techniques. <br/>
The focus remains on evaluating the effectiveness of the triplet loss in TSC, utilizing a simple FCN architecture as the foundation for the TRILITE model.

--------------------

#  Triplet Loss In Time

The TRILITE model consists of 3 shared-weight encoders, with its architecture based on the FCN. <br/>
It employs the triplet loss, inspired by face recognition techniques, to train the model. <br/>
Triplet generation involves a combination of mixing-up and masking approaches, ensuring diverse and informative training samples. <br/>
The online triplet generation strategy enhances model generalization during training.

-------------------

# Experimental Evaluations

TRILITE model is evaluated based on two identified use cases: <br/>
1.  The datasets and implementation details are outlined, with experiments conducted on the UCR archive. <br/>
The model is compared against a supervised FCN model and a hybrid approach, TRILITE+FCN, which concatenates self-supervised and supervised features. <br/>
2.  Involving partially annotated datasets, a semi-supervised scenario is explored where only a portion of the data is labeled.
<br/>
<br/>
The results demonstrate the effectiveness of the TRILITE+FCN approach, particularly in scenarios with limited labeled data, showcasing the potential of self-supervised learning to enhance classification performance.
