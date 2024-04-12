import { Outlet } from "react-router-dom"
import Header from "../components/header"
import Footer from "../components/footer"
import { useEffect } from "react";
import { AppDispatch } from "../redux/store";
import { useDispatch } from "react-redux";
import { fetchArticles, fetchFAQ, fetchGreenChampions, fetchPartners, fetchTeamMembers, fetchTotalTrees, fetchYoutubeVideos } from "../redux/reducers/microServices";
import DonateModal from "../components/donationForm";
import DonateInfoPage from "../components/confirmDonation";


const Root = () => {
  const dispatch:AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTotalTrees());
    dispatch(fetchYoutubeVideos());
    dispatch(fetchGreenChampions());
    dispatch(fetchPartners());
    dispatch(fetchArticles());
    dispatch(fetchFAQ());
    dispatch(fetchTeamMembers());
  }, [dispatch]);
  return (
    <>
    <DonateModal />
    <DonateInfoPage />
    <Header />
    <main>
        <Outlet />
    </main>
    <Footer />
    </>
  )
}

export default Root