---
layout: page
title:  "Occupancy Map Prediction for Improved Indoor Robot Navigation"
# date:   2022-04-24 01:00:00 -0500
# author: "Vishnu Sharma"
---
<p align="center" style="font-size:28pt"><strong>Occupancy Map Prediction for Improved Indoor Robot Navigation</strong></p>

<div align="center" markdown="1" style="justify-content:space-between;">
[Vishnu Dutt Sharma](https://vishnuduttsharma.github.io/), [Jingxi Chen](https://codingrex.github.io/), [Abhinav Shrivastava](http://www.cs.umd.edu/~abhinav/), [Pratap Tokekar](https://tokekar.com/) \\
[University of Maryland - College Park](https://umd.edu/)
</div>

<center>
<p style="font-size:24pt">Abstract</p>
</center>

In the typical path planning pipeline for a ground robot, we build a map (e.g., an occupancy grid) of the environment as the robot moves around. While navigating indoors, a ground robot's knowledge about the environment may be limited by the occlusions in its surroundings. Therefore, the map will have many as-yet-unknown regions that may need to be avoided by a conservative planner. Instead, if a robot is able to correctly infer what its surroundings and occluded regions look like, the navigation can be further optimized. In this work, we propose an approach using pix2pix and UNet to infer the occupancy grid in unseen areas near the robot as an image-to-image translation task. Our approach simplifies the task of occupancy map prediction for the deep learning network and reduces the amount of data required compared to similar existing methods. We show that the predicted map improves the navigation time in simulations over the existing approaches.

---

<center>
<p style="font-size:24pt">Method</p>
</center>

We use UNet<sup>[1]</sup> and pix2pix<sup>[2]</sup> as inpainting networks, trained on an effeicent data collection strategy that emulated presence of additional cameras on the robot.

<div align="center" markdown="1" style="justify-content:space-between;">
<img src="../img/projects/occmap_robot_config.png" alt="Top view of the robot setup" width="250"/>  <img src="../img/projects/occmap_overview.png" alt="Overview of the proposed approach. We take the input view from the left and right sides of the robot looking towards the region of interest. The inpainting network is trained by using the occupancy from the center camera only, and the combined map from the three cameras acts as the ground truth" width="650"/>

*Overview of the proposed approach. We take the input view from the left and right sides of the robot looking towards the region of interest. The inpainting network is trained by using the occupancy from the center camera only, and the combined map from the three cameras acts as the ground truth.*

</div>

---

<center>
<p style="font-size:24pt">Results</p>
</center>

Pix2pix achieves a better performance than simple UNet, both qualitatively and quantitatively. Using the inpainting for occupancy map inpainting, the robot is able to naviagte more efficently using a single depth camera only.

<div align="center" markdown="1" style="justify-content:space-between;">
<img src="../img/projects/result_examples.png" alt="A few example results from the models used in our experiemnts"/> 

*A few example predictions from the models used in our experiemnts*
</div>

<video width="33%" autoplay loop muted> <source src="../vids/projects/occmap_normal_video.mp4"> </video>  
<video width="33%" autoplay loop muted> <source src="../vids/projects/occmap_gt_video.mp4"> </video> 
<video width="33%" autoplay loop muted> <source src="../vids/projects/occmap_ganl_video.mp4"> </video> 

<div align="center" markdown="1" style="justify-content:space-between;"> 
*The navigation results with (a) a single camera setup, (b) multi-camera camera setup, and (c) predicting/inpainting the occupancy map from the single camera feed. The inpainting augments the robot's infromation about the environment and helps it move faster.*
</div>

--- 

<center>
<p style="font-size:24pt">References</p>
</center>
[1] Ronneberger, Olaf, Philipp Fischer, and Thomas Brox. "U-net: Convolutional networks for biomedical image segmentation." International Conference on Medical image computing and computer-assisted intervention. Springer, Cham, 2015.

[2] Isola, Phillip, et al. "Image-to-image translation with conditional adversarial networks." Proceedings of the IEEE conference on computer vision and pattern recognition. 2017.

---

<center>
<p style="font-size:24pt">Citation</p>
</center>
	@article{sharma2021risk,
	  title={Risk-Aware Path Planning for Ground Vehicles using Occluded Aerial Images},
	  author={Sharma, Vishnu Dutt and Tokekar, Pratap},
	  journal={arXiv preprint arXiv:2104.11709},
	  year={2021}
	}

