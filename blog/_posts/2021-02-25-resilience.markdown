---
layout: post
title:  "Resilient Multi-Robot Coordination"
date:   2021-02-25 15:20:00 -0500
categories: multi-robot
author: "Ishat Rabban"
---

Back to blog posts: [Blogs](http://raaslab.org/blog/)

Our recent contributions cover different aspects of resilience and can be
summarized as follows:

-   **Withstanding attacks** - We consider multi-robot optimization tasks
    (target tracking, orienteering, etc.) where some robots may fail due to
    sensor malfunction or adversarial attack. The objective is to design
    algorithms such that task performance is maximized under a worst-case
    failure of at most α robots.

    -   *Resilient Target Tracking*: In the resilient target tracking problem,
        the objective is to design algorithms to select trajectories such that
        the coverage of the targets is maximized under worst-case failure of α
        robots. We propose both centralized and distributed algorithms as
        follows:

        -   We propose centralized algorithms based on greedy and local search
            strategy, which outperform the existing algorithms. We empirically
            evaluate the performance of our proposed algorithms on the
            persistent monitoring task as shown in the following video.
            
            <div align="center">
                <a href="https://www.youtube.com/watch?v=XdQ5h5aOMAA"><img src="https://img.youtube.com/vi/XdQ5h5aOMAA/0.jpg" alt="IMAGE ALT TEXT"></a>
            </div>
        

            **Failure-Resilient Coverage Maximization with Multiple Robots.** I.
            E Rabban, P. Tokekar. *International Conference on Robotics and
            Automation (ICRA),* 2021.
            [pdf](https://arxiv.org/pdf/2007.02204.pdf)

        -   We propose a decentralized algorithm based on divide-and-conquer
            strategy that partitions the communication graph among cliques of
            robots, which achieves comparable performance with respect to the
            centralized counterparts.

            **Distributed Attack-Robust Submodular Maximization for Multi-Robot
            Planning.** L. Zhou, V. Tzoumas, G. J. Pappas, and P. Tokekar.
            *International Conference on Robotics and Automation (ICRA)*, 2020.
            [pdf](http://raaslab.org/pubs/zhou2020distributed.pdf)

    -   *Robust Multiple Path Orienteering*: A new problem named Robust Multiple
        Path Orienteering is formulated, in which a team of *N* robots are
        dispatched to collect rewards of the environment, where at most α out of
        the *N* robots may fail. An offline approximation algorithm against the
        worst-case attacks is proposed and is shown to have constant
        approximation bound.
        
        <div align="center">
            <img src="/img/rw_gp.PNG" width="600" height="250" />
        </div>


        **Robust Multiple-Path Orienteering Problem: Securing Against
        Adversarial Attacks**. G. Shi, L. Zhou, P. Tokekar. *Robotics: Science
        and Systems* (*RSS*), 2020.
        [Pdf](http://raaslab.org/pubs/shi2020robust.pdf)

-   **Recovering from attacks** - We consider the problem on how to make a
    connected robotic network, which is generated from a 2-connected network by
    losing one node, recover to the 2-connected state with minimum maximum
    travel distance (time). An algorithm based on Block-Cut-Tree was proposed.

    <div align="center">
        <img src="/img/rw_fbr.PNG" width="400" height="400" />
    </div>


    **Fast Biconnectivity Restoration in Multi-Robot Systems for Robust
    Communication Maintenance.** G. Shi, I. E Rabban, P. Tokekar**.**
    *International Conference on Robotics and Automation (ICRA)*, 2021
    (submitted) [pdf](https://arxiv.org/pdf/2011.00685.pdf)

-   **Evolving with tasks** - We consider how to jointly optimize a submodular
    objective for a team of robots and the connectivity for a team of robots.
    The robotic network evolves as the task is performed.

    **Communication-Aware Multi-robot Coordination with Submodular
    Maximization**. G. Shi, I. E Rabban, L. Zhou, P. Tokekar. *International
    Conference on Robotics and Automation (ICRA)*, 2021. (submitted)
    [pdf](https://arxiv.org/pdf/2011.01476.pdf)
