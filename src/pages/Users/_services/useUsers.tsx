import {useAppDispatch, useAppSelector} from "@hooks/useRedux";
import {useEffect} from "react";
import {userThunk} from "@redux/reducers/user/user.thunk";
import {useSearchParams} from "react-router-dom";

const useUsers = () => {
    const dispatch = useAppDispatch();
    const usersData = useAppSelector((state) => state.usersData?.userData);
    const [searchParams, setSearchParams] = useSearchParams();
    const currentPage = Number(searchParams.get('page')) || 1;

    useEffect(() => {
        dispatch(userThunk(currentPage));
    }, [dispatch, currentPage]);

    const handlePageChange = (page: number) => {
        setSearchParams({ page: page.toString() });
    };
    return {
        usersData:usersData?.data?.data,
        totalPages:usersData?.data?.total_pages,
        handlePageChange,
        currentPage,
        isLoading:usersData?.isLoading,
    }
}

export default useUsers