import BlogsComp from "../../../components/blogscomp"

const BLOGS = [
    {id: 1, author:"zakaria rabah", authorImg: "authorimg.jpg", datePosted:"20/08/2022" ,blogImgUrl: "corona.jpg" ,category: "علوم", title: "عالم الميكروبات يستمتع بالصَيف!", body: "نظرا لحالات التسمّم الغذائي المسجّلة خلال فصل الصيف، يبدو أنّ الميكروبات أيضا جِدّ مستمتعة به، قد يكون الأمر غريبا لكنّه حقيقي ومدعاةً للتساؤل! لماذا تكثُر حالات التسمم الغِذائي في فصل الصيف؟"},
    {id: 2, author:"zakaria rabah", authorImg: "authorimg.jpg", datePosted:"20/08/2022" ,blogImgUrl: "corona.jpg" ,category: "علوم", title: "عالم الميكروبات يستمتع بالصَيف!", body: "نظرا لحالات التسمّم الغذائي المسجّلة خلال فصل الصيف، يبدو أنّ الميكروبات أيضا جِدّ مستمتعة به، قد يكون الأمر غريبا لكنّه حقيقي ومدعاةً للتساؤل! لماذا تكثُر حالات التسمم الغِذائي في فصل الصيف؟"},
    {id: 3, author:"zakaria rabah", authorImg: "authorimg.jpg", datePosted:"20/08/2022" ,blogImgUrl: "corona.jpg" ,category: "علوم", title: "عالم الميكروبات يستمتع بالصَيف!", body: "نظرا لحالات التسمّم الغذائي المسجّلة خلال فصل الصيف، يبدو أنّ الميكروبات أيضا جِدّ مستمتعة به، قد يكون الأمر غريبا لكنّه حقيقي ومدعاةً للتساؤل! لماذا تكثُر حالات التسمم الغِذائي في فصل الصيف؟"},
    {id: 4, author:"zakaria rabah", authorImg: "authorimg.jpg", datePosted:"20 / 08 / 2022" ,blogImgUrl: "corona.jpg" ,category: "علوم", title: "عالم الميكروبات يستمتع بالصَيف!", body: "نظرا لحالات التسمّم الغذائي المسجّلة خلال فصل الصيف، يبدو أنّ الميكروبات أيضا جِدّ مستمتعة به، قد يكون الأمر غريبا لكنّه حقيقي ومدعاةً للتساؤل! لماذا تكثُر حالات التسمم الغِذائي في فصل الصيف؟"},
]
const SECBLOGS = [
    {id: 1, author:"محمد المحرز", authorImg: "authorimg.jpg", datePosted:"20/08/2022" ,blogImgUrl: "corona.jpg" ,category: "ثقافة", title: "عالم الميكروبات يستمتع بالصَيف!", body: "نظرا لحالات التسمّم الغذائي المسجّلة خلال فصل الصيف، يبدو أنّ الميكروبات أيضا جِدّ مستمتعة به، قد يكون الأمر غريبا لكنّه حقيقي ومدعاةً للتساؤل! لماذا تكثُر حالات التسمم الغِذائي في فصل الصيف؟"},
    {id: 2, author:"محمد المحرز", authorImg: "authorimg.jpg", datePosted:"20/08/2022" ,blogImgUrl: "corona.jpg" ,category: "ثقافة", title: "عالم الميكروبات يستمتع بالصَيف!", body: "نظرا لحالات التسمّم الغذائي المسجّلة خلال فصل الصيف، يبدو أنّ الميكروبات أيضا جِدّ مستمتعة به، قد يكون الأمر غريبا لكنّه حقيقي ومدعاةً للتساؤل! لماذا تكثُر حالات التسمم الغِذائي في فصل الصيف؟"},
    {id: 3, author:"zakaria rabah", authorImg: "authorimg.jpg", datePosted:"20/08/2022" ,blogImgUrl: "corona.jpg" ,category: "ثقافة", title: "عالم الميكروبات يستمتع بالصَيف!", body: "نظرا لحالات التسمّم الغذائي المسجّلة خلال فصل الصيف، يبدو أنّ الميكروبات أيضا جِدّ مستمتعة به، قد يكون الأمر غريبا لكنّه حقيقي ومدعاةً للتساؤل! لماذا تكثُر حالات التسمم الغِذائي في فصل الصيف؟"},
    {id: 4, author:"zakaria rabah", authorImg: "authorimg.jpg", datePosted:"20 / 08 / 2022" ,blogImgUrl: "corona.jpg" ,category: "ثقافة", title: "عالم الميكروبات يستمتع بالصَيف!", body: "نظرا لحالات التسمّم الغذائي المسجّلة خلال فصل الصيف، يبدو أنّ الميكروبات أيضا جِدّ مستمتعة به، قد يكون الأمر غريبا لكنّه حقيقي ومدعاةً للتساؤل! لماذا تكثُر حالات التسمم الغِذائي في فصل الصيف؟"},
]
export default function Scienses() {
    return (
        <>
            <BlogsComp category="علوم" blogsData={BLOGS} secBlogsData={SECBLOGS}/>
        </>
    )
}