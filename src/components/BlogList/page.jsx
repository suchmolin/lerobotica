"use client"
import { data } from "@/data/blog"
import CardBlog from "../CardBlog/page"
import { useEffect, useState } from "react"
import BlogContentBox from "../BlogContentBox/page"

export default function BlogList() {
  const [selected, setSelected] = useState()
  const [currentBlog, setCurrentBlog] = useState()
  const blog = data.find((item) => item.id === selected)

  useEffect(() => {
    if (selected) {
      setCurrentBlog(blog)
    }
  }, [selected])

  return (
    <>
      <div className="w-full py-10 flex justify-center">
        <div className="w-full flex flex-wrap gap-7 justify-center">
          {data.map((item) => (
            <CardBlog
              key={item.id}
              data={item}
              selected={selected}
              setSelected={setSelected}
            />
          ))}
        </div>
      </div>
      <div id="blogBox">
        {currentBlog && <BlogContentBox data={currentBlog} />}
      </div>
    </>
  )
}
