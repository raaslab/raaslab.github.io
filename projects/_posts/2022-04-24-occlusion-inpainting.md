---
layout: project
title:  "Risk-Aware Path Planning for Ground Vehicles using Occluded Aerial Images"
date:   2022-04-24 01:00:00 -0500
categories: perception, inpainting, ground robot
author: "Vishnu Sharma"
---

<center>
# Risk-Aware Path Planning for Ground Vehicles using Occluded Aerial Images

### Abstract

We consider scenarios where a ground vehicle plans its path using data gathered by an aerial vehicle. In the aerial images, navigable areas of the scene may be occluded due to obstacles. Naively planning paths using aerial images may result in longer paths as a conservative planner may try to avoid regions that are occluded. We propose a modular, deep learning-based framework that allows the robot to predict the existence of navigable areas in the occluded regions. Specifically, we use image inpainting methods to fill in parts of the areas that are potentially occluded, which can then be semantically segmented to determine navigability. We use supervised neural networks for both modules. However, these predictions may be incorrect. Therefore, we extract uncertainty in these predictions and use a risk-aware approach that takes these uncertainties into account for path planning. We compare modules in our approach with non-learning-based approaches to show the efficacy of the proposed framework through photo-realistic simulations. The modular pipeline allows further improvement in path planning and deployment in different settings.


</center>
