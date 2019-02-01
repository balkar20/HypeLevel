using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;

namespace MyWPFdictionary.Helpers
{
    public static class FileHelper
    {
        public static string GetPathForRoot(string pathForRoot)
        {
            string lPath;
            string location = AppDomain.CurrentDomain.BaseDirectory + $"{pathForRoot}";
            int index;
            index = location.IndexOf("bin");
            if (index > 0)
            {
                lPath = location.Remove(index, 10);
            }
            else
            {
                lPath = location;
            }

            return lPath;
        }

        public static List<string> ReadAsListString(Type type, string path)
        {
            List<string> lines = new List<string>();
            using (var resourceStream = ReadAsStream(type, path))
            {
                if (resourceStream == null)
                {
                    throw new Exception($"Embedded resource '{path}' was not found.");
                }

                using (var reader = new StreamReader(resourceStream))
                {
                    while (reader.Peek() >= 0)
                    {
                        string line = reader.ReadLine();
                        if (!string.IsNullOrWhiteSpace(line))
                        {
                            lines.Add(line);
                        }
                    }
                    return lines;
                }
            }
        }

        public static Stream ReadAsStream(Type type, string path)
        {
            var assembly = type.GetTypeInfo().Assembly;
            if (path.StartsWith("./") || path.StartsWith(".\\"))
            {
                path = $"{type.Namespace}.{path.Substring(2)}";
            }
            path = path.Replace("\\", ".").Replace("/", ".");

            return assembly.GetManifestResourceStream(path);
        }
    }
}