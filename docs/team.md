---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: '/images/avatar.svg',
    name: 'Jack Yan',
    title: '创造者',
    links: [
      { icon: 'github', link: 'https://github.com/reonra' },
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
    个人简介
    </template>
    <template #lead>
      艺创文档由一个人进行维护。
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>