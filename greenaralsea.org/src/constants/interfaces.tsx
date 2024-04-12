// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Idonater {
    amount: string,
    created: string,
    display_name: string,
    is_gift: boolean,
    message: string,
}

interface INews {
    title:string
    description: string
    image:string 
    created: string,
    creator:string,
    is_published: boolean,
}

interface IVideos {
    description: string,
    link: string,
    snapshot: string
}

interface IPartners {
    name: string,
    link: string,
    is_link_enabled: boolean,
    logo: string
}

interface IFAQ {
    question: string,
    answer: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface IMicroService {
    totalTrees: number,
    YoutubeVideo: IVideos[],
    Partners: IPartners[],
    greenChampions: IPartners[],
    VideosisLoading: boolean,
    VideosisFailed: boolean,
    news: INews[],
    isArticlesLoading?: boolean,
    isArticlesFailed?: boolean,
    selectedArticle?: INews | null,
    faq:IFAQ[],
    teamembers:IMember[]
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface IMember {
    name: string,
    description: string,
    avatar: string,
}