---
title: What's supported for Harness Code Repository
description: The Code module has these features and functionality.
sidebar_label: What's supported
sidebar_position: 10
---

The [Harness Code Repository module](/docs/code-repository/code-supported.md) (Code) is a source code management (SCM) tool that fosters developer collaboration and accelerates innovation while keeping security and compliance in mind. Harness Code seamlessly integrates Git-based repositories across your software delivery processes in Harness.

The Harness Code supports these features:

* [Create repositories.](./config-repos/create-repo.md)
* [Import repositories.](./config-repos/import-repo.md)
* [Collaborate and develop](/docs/category/collaborate-and-develop):
   * Clone repositories to work locally.
   * Commit, branch, and tag directly in the Harness Platform.
* Create, review, and merge [pull requests](/docs/category/pull-requests):
   * Conduct code reviews.
   * Implement status checks.
   * Define merge requirements.
   * Specify merge strategies.
   * Assign [code owners](./config-repos/rules.md) and create [branch rules](./config-repos/rules.md).
* Use Harness Code repositories in your [Harness pipelines](./pipelines/codebase-from-harness-code.md), and set up [triggers](./pipelines/code-triggers.md) to automatically run pipelines based on activity in your Harness Code repositories. You can also use Harness Code Repository with the [Harness Git Experience](/docs/platform/git-experience/git-experience-overview).
* [Configure webhooks](./config-repos/webhooks.md) to integrate your repositories with third-party applications.
* Use keyword search to query your code.
* Get email notifications for PRs and repositories you're affiliated with.
   * You can manage these settings in your user profile.
   * With Harness Self-Managed Enterprise Edition, notifications require an [SMTP configuration](/docs/platform/notifications/add-smtp-configuration).

For information about what's supported for other Harness modules and the Harness Platform overall, go to [Supported platforms and technologies](/docs/get-started/supported-platforms-and-technologies.md).
