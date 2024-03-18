# [电子邮件帮助程序](https://email-helper.vercel.app/)

该项目使用人工智能为您生成电子邮件。  


[立即使用](https://email-helper.tool.aueal.com/)


## 支持
`英语`, ` 简体中文`, `繁体中文`, `日语`, `意大利人`, `德语`, `西班牙的`,`法语`,`荷兰语` ,`韩语`,`高棉语`, `印地语`

欢迎 PR

## 工作原理

受到 [TwtterBio](https://github.com/Nutlope/twitterbio) 和 [Danny Richman](https://twitter.com/DannyRichman/status/1598254671591723008?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1598254671591723008%7Ctwgr%5Eb7deab6eb03d86a1b9ac13f7e38cdeab57a40cbb%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fwww.buzzfeednews.com%2Farticle%2Ftomwarren%2Fai-app-dyslexic-email-writer-help) 的启发

技术支持 [OpenAI](https://openai.com/), [Next.js](https://nextjs.org/), [Vercel](https://vercel.com/) 和 [Tailwind CSS](https://tailwindcss.com/).

此项目使用 [OpenAI GPT-3 API](https://openai.com/api/) (具体而言，text-davinci-003) 和 [Vercel Edge functions](https://vercel.com/features/edge-functions) 流媒体。 它根据表单和用户输入构建提示，通过Vercel Edge函数将其发送到GPT-3 API，然后将响应流式传输回应用程序。

关于如何使用OpenAI和Vercel Edge功能构建应用程序的视频和博客文章即将发布！

## 在本地运行
克隆repo后，转到 [OpenAI](https://beta.openai.com/account/api-keys) 创建一个帐户并将您的API密钥放入名为 `.env`.

然后，在命令行中运行该应用程序，它将在`http://localhost:3000`.

```bash
npm run dev
```

## 一键部署

使用部署示例 [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=vercel-examples):

[![使用Vercel进行部署](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Nutlope/twitterbio&env=OPENAI_API_KEY&project-name=twitter-bio-generator&repo-name=twitterbio)

<!-- https://www.seotraininglondon.org/gpt3-business-email-generator/ -->