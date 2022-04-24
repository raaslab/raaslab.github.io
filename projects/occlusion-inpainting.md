---
layout: page
title:  "Risk-Aware Path Planning for Ground Vehicles using Occluded Aerial Images"
date:   2022-04-24 01:00:00 -0500
author: "Vishnu Sharma"
---
<p align="center" style="font-size:28pt"><strong>Risk-Aware Path Planning for Ground Vehicles using Occluded Aerial Images</strong></p>

<div align="center" markdown="1" style="justify-content:space-between;">
[Vishnu Dutt Sharma](https://vishnuduttsharma.github.io/), [Pratap Tokekar](https://tokekar.com/) \\
[University of Maryland - College Park](https://umd.edu/)
</div>

<center>
<p style="font-size:24pt">Abstract</p>
</center>

We consider scenarios where a ground vehicle plans its path using data gathered by an aerial vehicle. In the aerial images, navigable areas of the scene may be occluded due to obstacles. Naively planning paths using aerial images may result in longer paths as a conservative planner may try to avoid regions that are occluded. We propose a modular, deep learning-based framework that allows the robot to predict the existence of navigable areas in the occluded regions. Specifically, we use image inpainting methods to fill in parts of the areas that are potentially occluded, which can then be semantically segmented to determine navigability. We use supervised neural networks for both modules. However, these predictions may be incorrect. Therefore, we extract uncertainty in these predictions and use a risk-aware approach that takes these uncertainties into account for path planning. We compare modules in our approach with non-learning-based approaches to show the efficacy of the proposed framework through photo-realistic simulations. The modular pipeline allows further improvement in path planning and deployment in different settings.

---

<center>
<p style="font-size:24pt">Method</p>
</center>

We propsose a planning framework consisting of an automated masking procedure, an image inpainting network to replace the masked region with underlying scene, and a risk-aware path planner to prescribe better, risk-aware paths through occluded, but potentially navigable areas for the ground robot using images from a UAV.

<div align="center" style="justify-content:space-between;">
<img src="../img/projects/occlusion_overview.png" alt="Overview of our approach"/> 

*Overview of the proposed framework. Given an aerial image, a mask is generated indicating the parts that need to
be modified. Using the mask, the image is inpainted, and then semantic segmentation and uncertainty map are generated. A
path-planner uses a combination of them to generate a risk-aware path*
</div>

---

<center>
<p style="font-size:24pt">Results</p>
</center>

Various parts in our fraemwork provide better results than teh traditional approaches and allow the user to select risk-aware paths as per their risk appetite.

<div align="center" markdown="1" style="justify-content:space-between;">

![Masking](/img/projects/occlusion_mask_exp.png "Our method can perfrom similar to manual selction of potential areas for inpainitng and is completely automated.") 

*Our masking procedure can perfrom similar to manual selction of potential areas for inpainitng and is completely automated.*

![Inpainting](/img/projects/occlusion_inpaint_exp.png "The inpainting network perform better than the traditional, non-learning-based inpainting methods. While the resulting images may not look aesthetically pleasing due to limited data, they help well with path planning") 

*The inpainting network perform better than the traditional, non-learning-based inpainting methods. While the resulting images may not look aesthetically pleasing due to limited data, they help well with path planning.*

![PathPlannig](/img/projects/occlusion_inpaint_path.png "Comparison of paths predicted for various λs i.e. level of risk-aversion, for the image with occlusions and the inpainted image")

*Comparison of paths predicted for various λs i.e. level of risk-aversion, for the image with occlusions and the inpainted image.*

![Surprise](/img/projects/occlusion_surprise_plot.png "Surprise for various λs over original and inpainted images")

*Surprise for various λs over original and inpainted images.*

</div>

---

<center>
<p style="font-size:24pt">Citation</p>
</center>
	@article{sharma2022occupancy,
	  title={Occupancy Map Prediction for Improved Indoor Robot Navigation},
	  author={Sharma, Vishnu Dutt and Chen, Jingxi and Shrivastava, Abhinav and Tokekar, Pratap},
	  journal={arXiv preprint arXiv:2203.04177},
	  year={2022}
	}






