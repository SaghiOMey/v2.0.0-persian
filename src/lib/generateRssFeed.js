import { writeFileSync } from "fs";
import  getAllPosts  from "../pages/api/posts";
import RSS from "rss";
export default async function getRSS() {
  const siteURL = "https://saghiomey.netlify.app/";
  const allBlogs = getAllPosts;
 
  const feed = new RSS({
    title: "Podcast SaghiOMey",
    description: "Podcast SaghiOMey Hosted By Milad",
    site_url: siteURL,
    feed_url: `${siteURL}feed.xml`,
    language: "en",
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, Podcast SaghiOMey`,
  });
 
  allBlogs.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date))).map((post) => {
    feed.item({
      title: post.title,
      url: post.url,
      date: post.date,
      description: post.describtion,
      enclosure: {
        'url'  : post.img,
        'type' : 'image/jpeg'
      },
    });
  });
 
  writeFileSync("./public/feed.xml", feed.xml({ indent: true }));
}
