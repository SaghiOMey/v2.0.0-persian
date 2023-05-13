import { writeFileSync } from "fs";
import  getAllPosts  from "../pages/api/posts";
import RSS from "rss";
export default async function getRSS() {
  const siteURL = "https://saghiomey.netlify.app/";
  const allBlogs = getAllPosts;
 
  const feed = new RSS({
    title: "Podcast SaghiOMey",
    description: "Podcast SaghiOMey Hosted By Milad",
    image: "https://s3-us-west-2.amazonaws.com/anchor-generated-image-bank/production/podcast_uploaded400/22745765/22745765-1673944614296-37120c17a1189.jpg",
    site_url: siteURL,
    feed_url: `${siteURL}/feed.xml`,
    language: "en",
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, Podcast SaghiOMey`,
  });
 
  allBlogs.map((post) => {
    feed.item({
      title: post.title,
      image: post.img,
      content: post.describtion,
      // url: `${siteURL}/blogs/${post.slug}`,
      url: post.url,
      date: post.date,
      description: post.describtion,
    });
  });
 
  writeFileSync("./public/feed.xml", feed.xml({ indent: true }));
}
