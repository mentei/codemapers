# Start with stable, versioned Ollama image
FROM ollama/ollama:0.1.25

# Set working directory
WORKDIR /ollama

# Pull only required model (change if needed)
RUN ollama pull mistral

# Clean cache to reduce image size (if any temp is created)
RUN rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Set non-root user (optional for security)
# USER nobody

# Expose only the required port
EXPOSE 11434

# Start ollama server
CMD ["ollama", "serve"]
