using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;

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
            string rootPath = GetPathForRoot($"files/{path}");
            lines = File.ReadAllLines(rootPath).ToList();
            return lines;
        }

        public static List<string> ReadAsListString(string path)
        {
            List<string> lines = new List<string>();
            lines = File.ReadAllLines(path).ToList();
            return lines;
        }

        public static IDictionary<string, string> CreateFileNamesDictinary(string[] fileNames)
        {
            Dictionary<string, string> result = new Dictionary<string, string>();

            foreach (var fileName in fileNames)
            {
                result.Add(Path.GetFileNameWithoutExtension(fileName), fileName);
            }

            return result;
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