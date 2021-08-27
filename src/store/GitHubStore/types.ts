import { type } from "os";
import { ApiResponse } from "../../shared/store/types";

export type GetOrganizationReposListParams = {
    organizationName: string;
}

export type GithubRepoOwner = {
    id: number;
    url: string;
    avatar_url: string;
    login: string;
}
export type RepoItem = {
    id: number;
    url: string;
    name: string;
    stargazers_count: number;
    owner: GithubRepoOwner
};

 export interface IGitHubStore {
    getOrganizationReposList(params: GetOrganizationReposListParams): Promise<ApiResponse<RepoItem[], any>>;
}