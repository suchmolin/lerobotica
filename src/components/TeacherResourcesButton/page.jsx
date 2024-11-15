"use client"
import { RiGraduationCapLine } from "react-icons/ri"
import Link from "next/link"
const TeacherResourcesButton = (props) => {
  const { setMenuResp } = props

  return (
    <div className="flex gap-1 flex-wrap text-lg">
      <span className="mt-1">
        <RiGraduationCapLine />
      </span>
      <Link onClick={() => setMenuResp(false)} href="/TeacherResources">
        Recursos de Maestros
      </Link>
    </div>
  )
}

export default TeacherResourcesButton
