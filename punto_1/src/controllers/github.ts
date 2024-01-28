import { Request, Response } from "express";
import axios, { AxiosResponse } from "axios";
import { GitHubRepo } from "../interfaces/github";

export const getRepositorios = async (req: Request, res: Response) => {
  try {
    const username = 'google';
    let page = 1;
    let repos: GitHubRepo[] = [];

    while (true) {
      const response: AxiosResponse<any[]> = await axios.get(
        `https://api.github.com/users/${username}/repos?sort=stargazers_count&page=${page}&per_page=100`
      );
        console.log(response.data.length)
      if (response.data.length === 0) {
        break;
      }

      repos = [
        ...repos,
        ...response.data.map((repo) => ({
          name: repo.name,
          description: repo.description,
          stargazers_count: repo.stargazers_count
        })),
      ];

      page++;
    }
    console.log(repos.length)
    repos.sort((a, b) => b.stargazers_count - a.stargazers_count);

    const topRepos = repos.slice(0, 10);

    return res.status(200).json({ ok: true, repositorios: topRepos });
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json({ ok: false, error: error.message });
  }
};
