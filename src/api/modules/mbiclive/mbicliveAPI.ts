import { AxiosPromise } from 'axios';
import { ApiService, config, date, ScheduleBannerCategory } from '@/api/index';
import { MbcDataInterface } from '@/types';
import { mbicLiveData } from '@/types/mbicLive';
import store from '@/store';

const fetchTopBanner = (): AxiosPromise<MbcDataInterface[]> => {
	const request = ApiService.get(
		`${config.controlUrl}/MBCApp/Banner/Live
		?date=${date}
		&type=${store.state.userAgent.mobileState}
		&category=${[ScheduleBannerCategory.MBICLIVE]}`,
	);
	return request;
};

const fetchMbicLiveListData = (): AxiosPromise<mbicLiveData[]> => {
	const request = ApiService.get(
		`${config.controlUrl}/Schedule/ONAIRWITHNVOD
		?date=${date}
		`,
	);
	return request;
};

export { fetchTopBanner, fetchMbicLiveListData };
