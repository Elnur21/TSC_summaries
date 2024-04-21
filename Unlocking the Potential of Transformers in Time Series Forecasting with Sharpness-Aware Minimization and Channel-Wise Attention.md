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

SAMformer outperforms TSMixer by 14.33% with fewer parameters.<br/>
SAMformer excels on 8 real-world datasets with input length L = 512 and prediction horizons H ∈ {96, 192, 336, 720}.<br/>
SAMformer maintains stability and smoothness in loss landscapes. <br/>
it promotes self-correlation among features, improving expressiveness (this is unlike transformer). <br/>
Sensitivity analysis confirms SAMformer's superiority over TSMixer in varying neighborhood sizes.
