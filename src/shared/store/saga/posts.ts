import { getAllPosts , loadingStart, loadingEnd, errorAdd, errorRemove } from '@/shared/store/slice/todosSaga'
import { call, put, takeEvery  } from 'redux-saga/effects'
import { AxiosResponse } from 'axios'; 
import api from '@/shared/api'


function* fetchPosts() { 
    try { 
        yield put(errorRemove())
        yield put(loadingStart())
        const posts: AxiosResponse = yield call(api.get, '/');
        yield put(getAllPosts(posts.data.slice(90)))
    } catch (err){ 
        if (err instanceof Error) { 
            yield put(errorAdd())
        }
    } finally { 
        yield put(loadingEnd())
    }
}

export default function* postsSaga () { 
    yield takeEvery('downloadPosts', fetchPosts)
}

export const downloadPosts = ()=>({
    type: 'downloadPosts'
})