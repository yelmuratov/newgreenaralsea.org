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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface ITransactionDetails {
    VENDOR_ID: string,
    MERCHANT_TRANS_ID: string,
    MERCHANT_TRANS_AMOUNT: string,
    MERCHANT_CURRENCY: string,
    MERCHANT_TRANS_NOTE: string,
    MERCHANT_TRANS_DATA:string,
    MERCHANT_TRANS_RETURN_URL: string
    SIGN_TIME: number,
    SIGN_STRING: string
    }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface IDonationDetails{
    amount:string
    display_name:string
    email:string
    message:string
    anonymous:boolean
    is_gift:boolean
    payment_method:number
}