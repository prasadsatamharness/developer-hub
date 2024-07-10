import { ExperimentDetails } from "@site/src/components/ChaosEngineering/ExperimentListSection";

export const experiments: ExperimentDetails[] = [
  {
    name: "Linux CPU stress",
    description:
      "Linux CPU stress stresses the CPU of the target Linux machines for a specific duration.",
    tags: ["linux","cpu","stress"],
    category: "linux",
  },
  {
    name: "Linux memory stress",
    description:
      "Linux memory stress causes memory consumption of the target Linux machines for a specific duration.",
    tags: ["linux","memory","stress"],
    category: "linux",
  },
  {
    name: "Linux disk IO stress",
    description:
      "Linux disk I/O Stress fault stresses the disk of the target Linux machines over IO operations for a certain duration.",
    tags: ["linux","diskio","stress"],
    category: "linux",
  },
  {
    name: "Linux network loss",
    description:
      "Linux network loss injects chaos to disrupt network connectivity on Linux machine by blocking the network requests.",
    tags: ["linux","network","loss"],
    category: "linux",
  },
  {
    name: "Linux network latency",
    description:
      "Linux network latency injects chaos to disrupt network connectivity on the Linux machine by adding delay to the network requests.",
    tags: ["linux","network","latency"],
    category: "linux",
  },
  {
    name: "Linux network corruption",
    description:
      "Linux network corruption injects chaos to disrupt network connectivity on Linux machine by corrupting the network requests.",
    tags: ["linux","network","corruption"],
    category: "linux",
  },
  {
    name: "Linux network duplication",
    description:
      "Linux network duplication injects chaos to disrupt network connectivity on Linux machine by duplicating network packets.",
    tags: ["linux","network","duplication"],
    category: "linux",
  },
  {
    name: "Linux network rate limit",
    description:
      "Linux network rate limit injects chaos to slow down the network connectivity on the Linux machine by limiting the network bandwidth to process fixed number of network packets per unit time.",
    tags: ["linux","network","rate-limit"],
    category: "linux",
  },
  {
    name: "Linux process kill",
    description:
      "Linux process kill fault kills the target processes running on Linux machines.",
    tags: ["linux","process"],
    category: "linux",
  },
  {
    name: "Linux service restart",
    description:
      "Linux service restart stops the target system services running on a Linux machine.",
    tags: ["linux","service"],
    category: "linux",
  },
  {
    name: "Linux DNS error",
    description:
      "Linux DNS error injects chaos to disrupt DNS resolution on the Linux machine.",
    tags: ["linux","dns"],
    category: "linux",
  },
  {
    name: "Linux DNS spoof",
    description:
      "Linux DNS spoof injects chaos to mimic DNS resolution on the Linux machine.",
    tags: ["linux","dns"],
    category: "linux",
  },
  {
    name: "Linux time chaos",
    description:
      "Linux time chaos injects chaos to change the time on the Linux machine.",
    tags: ["linux","time"],
    category: "linux",
  },
  {
    name: "Redis cache limit",
    description:
      "Redis cache limit fault limits the amount of memory used by a Redis cache. The original limit is restored after the chaos duration.",
    tags: ["linux","limit"],
    category: "linux",
  },
    {
    name: "Redis cache expire",
    description:
      "Redis cache expire expires a given key (or all keys) for a specific duration. Due to this, you won't be able to access the key/s associated with the cache during chaos.",
    tags: ["linux","expire"],
    category: "linux",
  },
  {
    name: "Redis cache penetration",
    description:
      "Redis cache penetration fault continuously sends cache requests to the Redis database to find the value for a non-existing key. This continuous request reduces the performance of the application.",
    tags: ["linux"],
    category: "linux",
  },
  {
    name: "Linux API latency",
    description:
      "Linux API latency injects API request and response latency into a Linux machine by starting proxy server and redirecting the traffic through it. It induces API call latency that adds a time delay before sending a response.",
    tags: ["linux"],
    category: "linux",
  },
];


