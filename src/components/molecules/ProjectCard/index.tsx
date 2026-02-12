import { ContentTitle } from "../../atoms";
import Icons from "../../icons";
import React from "react";
import classNames from "classnames";
import ProjectCardProps from "../../molecules/ProjectCard/types";
import { Link } from "react-router-dom";
import CrossPlatform from "components/icons/cross-platform";
import FigmaIcon from "components/icons/figma";

export default function ProjectCard({ data, className }: ProjectCardProps) {
  const {
    id,
    title,
    description,
    type,
    url,
    live,
    figma,
    case_study,
    play_store,
    apple_store,
    techStack,
    year,
    status,
  } = data;

  return (
    <article
      className={classNames(
        "flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow dark:shadow-gray-900/50 py-5 px-6 relative overflow-hidden",
        className,
      )}
    >
      <div className="flex flex-row items-start justify-between cursor-default mb-1">
        <ContentTitle className="truncate">{title}</ContentTitle>
        {type === "Web" ? (
          <Icons.Computer className="w-6 h-6 text-gray-400 flex-shrink-0 ml-2" />
        ) : type === "Cross-Platfrom" ? (
          <CrossPlatform />
        ) : type === "Design" ? (
          <FigmaIcon />
        ) : (
          <Icons.Mobile className="w-6 h-6 text-gray-400 flex-shrink-0 ml-2" />
        )}
      </div>

      {year && (
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 transition-colors duration-300">
          {year}
        </p>
      )}

      <p className="mt-1 mb-4 text-sm text-warmGray-500 dark:text-gray-300 cursor-default line-clamp-3 transition-colors duration-300">
        {description}
      </p>

      {/* Tech Stack Tags */}
      {techStack && techStack.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="text-xs bg-gray-50 dark:bg-gray-700 text-gray-400 dark:text-gray-300 px-2 py-1 rounded-md font-medium transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
          {techStack.length > 3 && (
            <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-300 px-2 py-1 rounded-md font-medium transition-colors duration-300">
              +{techStack.length - 3}
            </span>
          )}
        </div>
      )}

      {/* Links */}
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-gray-700 transition-colors duration-300">
        <Link
          to={`/project/${id}`}
          className="font-semibold text-sm text-indigo-500 dark:text-orange-400 hover:text-indigo-600 dark:hover:text-orange-300 focus:outline-none focus:ring-2 ring-indigo-500 dark:ring-orange-500 ring-offset-2 rounded-lg transition-colors duration-300"
        >
          View Details →
        </Link>
        <div className="flex space-x-3">
          {live && (
            <a
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-orange-400 focus:outline-none focus:ring-2 ring-indigo-500 dark:ring-orange-500 ring-offset-2 rounded-lg transition-colors duration-300"
              href={live}
              target="_blank"
              rel="noreferrer"
              title="View Live"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          )}
          {figma && (
            <a
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-orange-400 focus:outline-none focus:ring-2 ring-indigo-500 dark:ring-orange-500 ring-offset-2 rounded-lg transition-colors duration-300"
              href={figma}
              target="_blank"
              rel="noreferrer"
              title="View Figma"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" />
                <path d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z" />
                <path d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z" />
                <path d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z" />
                <path d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z" />
              </svg>
            </a>
          )}
          {play_store && (
            <a
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-orange-400 focus:outline-none focus:ring-2 ring-indigo-500 dark:ring-orange-500 ring-offset-2 rounded-lg transition-colors duration-300"
              href={play_store}
              target="_blank"
              rel="noreferrer"
              title="Google Play"
            >
              <Icons.PlayStore className="w-5 h-5" />
            </a>
          )}
          {apple_store && (
            <a
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-orange-400 focus:outline-none focus:ring-2 ring-indigo-500 dark:ring-orange-500 ring-offset-2 rounded-lg transition-colors duration-300"
              href={apple_store}
              target="_blank"
              rel="noreferrer"
              title="App Store"
            >
              <Icons.AppleStore className="w-5 h-5" />
            </a>
          )}
          {url && (
            <a
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-orange-400 focus:outline-none focus:ring-2 ring-indigo-500 dark:ring-orange-500 ring-offset-2 rounded-lg transition-colors duration-300"
              href={url}
              target="_blank"
              rel="noreferrer"
              title="View on GitHub"
            >
              <Icons.SocialGithub className="w-5 h-5" />
            </a>
          )}
          {case_study && (
            <a
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-orange-400 focus:outline-none focus:ring-2 ring-indigo-500 dark:ring-orange-500 ring-offset-2 rounded-lg transition-colors duration-300"
              href={case_study}
              target="_blank"
              rel="noreferrer"
              title="Case Study"
            >
              Case Study
            </a>
          )}

          {status === "In Progress" && (
            <div className="px-2 py-1 bg-emerald-50 text-green-800 text-xs font-medium rounded-full">
              In Progress
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
