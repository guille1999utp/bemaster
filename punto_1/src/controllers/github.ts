import { Request, Response } from "express";
import axios, { AxiosResponse } from "axios";
import { GitHubRepo } from "../interfaces/github";

export const getRepositorios = async (req: Request, res: Response) => {
  try {
    const username = 'google';
    const perPage = 10;

    const response: AxiosResponse<any> = await axios.get(
      `https://api.github.com/search/repositories?q=user:${username}&per_page=${perPage}`
    );

    const repos: GitHubRepo[] = response.data.items.map((repo: any) => ({
      name: repo.name,
      description: repo.description,
      stargazers_count: repo.stargazers_count
    }));

    return res.status(200).json({ ok: true, repositorios: repos });
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json({ ok: false, error: error.message });
  }
};
