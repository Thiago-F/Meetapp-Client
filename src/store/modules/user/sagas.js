import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
    try {
        // eslint-disable-next-line camelcase
        const { name, email, banner_id, ...rest } = payload.data;

        const profile = {
            name,
            email,
            banner_id,
            ...(rest.oldPassword ? rest : {}),
        };

        const response = yield call(api.put, 'users', profile);
        toast.success('Perfil atualizado com sucesso');

        yield put(updateProfileSuccess(response.data));
    } catch (error) {
        toast.error('Errou ao atualizar perfil, confira seus dados ');
        yield put(updateProfileFailure());
    }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
