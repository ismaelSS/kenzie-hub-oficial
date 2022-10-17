import { UserInfosDiv } from "./styles";

export const UserInfos = () => {
    const userNameLocal = localStorage.getItem("@kh_userName");
    const userCourseLocal = localStorage.getItem("@kh_userCourse");
  return (
    <UserInfosDiv>
        <h1 className="title1">Olá, {userNameLocal}</h1>
        <span className="font3">{userCourseLocal}</span>
    </UserInfosDiv>
  );
};
