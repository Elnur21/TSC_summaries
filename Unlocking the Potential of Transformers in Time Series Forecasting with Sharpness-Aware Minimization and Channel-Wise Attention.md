# Introduction

Multivariate time series forecasting faces challenges in long-term predictions due to complex correlations, despite the potential of transformers.<br/>
SAMformer is an integrating transformer architecture with sharpness-aware minimization.<br/>
It outperforms existing models in stability and accuracy,
<br/> and offering a promising solution for accurate forecasting with fewer parameters.

-------------------------

#  Proposed Approach

 In multivariate long-term forecasting time series analysis predicts future trends from historical data, minimizing mean squared error. <br/>
 The transformer with channel-wise attention and direct linear output, fails to achieve optimal solutions. <br/>
 Transformer training reveals sharpness issues in loss landscapes, hindering convergence. <br/>
 Solutions like sharpness aware minimization show promise, with SAM proving more effective in achieving stability and generalization. <br/>
 SAMformer enhances feature permutation invariance and reduces complexity.

------------------------

# Experiments


 
